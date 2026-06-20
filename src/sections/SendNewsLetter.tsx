import { serverAnswer } from "../api/auth";
import { FormInput } from "../components/ui/FormInput";
import { useForm } from "../hooks/useForm";
import { formValidation } from "../features/Validation";
import ButtonSpin from "../components/ui/ButtonSpin";
import toast from "react-hot-toast";

function SendNewsLetter() {

    const { formData, errors, setErrors, buttonIsLoading, setBtnIsLoading, handleChange, handleSubmit } = useForm({
            initialValues: { email: '' },
            validate: formValidation,
            onSubmit: async (formData) => {
                try {
                    const result = await serverAnswer(formData);
                    if (result && result.status === 'error') {
                        setErrors(result.errors);
                        toast.error('Please fix the errors in the form');
                    } else {
                        toast.success('We’ll send you news once per week!');
                        console.log(result.token)
                    }
                } catch (serverError: unknown) {
                    if (serverError instanceof Error) {
                        toast.error(serverError.message);
                    } else {
                        toast.error('Something went wrong. Please try again.')
                    }
                } finally {
                    setBtnIsLoading(false);
                }
                
            }
        })

    return (
        <section>
        <div className="flex flex-col md:flex-row md:justify-between md:px-8 py-12 gap-8">
            <div className="flex flex-col gap-2 text-center md:text-start">
            <h2 className="text-neutral-900 text-lg font-semibold md:text-xl">Join our newsletter</h2>
            <p className="text-neutral-600 text-base font-normal">We’ll send you a nice letter once per week. No spam.</p>
            </div>
            <form id="send-letter_section" className="flex flex-col md:flex-row gap-3 justify-center" noValidate onSubmit={handleSubmit}>
                
                <FormInput 
                    label=""
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    className="text-neutral-500 w-full md:w-full py-2.5 px-3.5 rounded-lg border border-neutral-300 h-fit"
                />
                
                <button type="submit" className={`text-base-white w-full md:w-fit text-center py-3 md:px-5 ${buttonIsLoading ? 'bg-neutral-300 pointer-events-none' : 'bg-brand-700 pointer-events-auto'}`} disabled={buttonIsLoading}>{buttonIsLoading ? <ButtonSpin /> : 'Subscribe'}</button>
            </form>
        </div>
        </section>
    )
}

export default SendNewsLetter;