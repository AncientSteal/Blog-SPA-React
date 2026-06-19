import { Link } from "react-router-dom";
import { formValidation } from "../features/Validation";
import ButtonSpin from "../components/ui/ButtonSpin";
import { FormInput } from "../components/ui/FormInput";
import { useForm } from "../hooks/useForm";
import { serverAnswer } from "../api/auth";
import toast from "react-hot-toast";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function RegistrationPage() {

    const { login } = useAuth();
    const navigate = useNavigate();

    const { formData, errors, setErrors, buttonIsLoading, setBtnIsLoading, handleChange, handleSubmit } = useForm({
        initialValues: { login: '', email: '', number: '', password: '', password_repeat: ''},
        validate: formValidation,
        onSubmit: async (formData) => {
            try {
                const result = await serverAnswer(formData);
                if (result && result.status === 'error') {
                    setErrors(result.errors);
                    toast.error('Please fix the errors in the form');
                } else if (result && result.status === 'success') {
                    toast.success('Registration success!');
                    login(result.token, result.user);
                    navigate('/');
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
            <div className="flex flex-col py-24 md:py-36 my-auto gap-8 md:gap-16 items-center">
                <div className="flex flex-col gap-6 text-center">
                    <span className="text-brand-700 text-base">Registration</span>
                    <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900">Get in touch</h2>
                    <p className="text-neutral-500">We’d want to work with you, let's start.</p>
                </div>
                <form onSubmit={handleSubmit} id="registration-form" className="text-sm text-neutral-700 font-medium w-full lg:w-[30vw] md:w-[60vw] flex flex-col gap-2" action="" noValidate>
                    
                    <FormInput 
                        label="Login"
                        name="login"
                        type="text"
                        placeholder="login"
                        value={formData.login}
                        onChange={handleChange}
                        error={errors.login}
                    />
                    <FormInput 
                        label="Email"
                        name="email"
                        type="text"
                        placeholder="example@mail.com"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                    />
                    <FormInput 
                        label="Phone number"
                        name="number"
                        type="tel"
                        autoComplete="tel"
                        placeholder="telephone"
                        value={formData.number}
                        onChange={handleChange}
                        error={errors.number}
                    />
                    <FormInput 
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="example45!_"
                        value={formData.password}
                        onChange={handleChange}
                        error={errors.password}
                    />
                    <FormInput 
                        label="Repeat your password"
                        name="password_repeat"
                        type="password"
                        placeholder="example45!_"
                        value={formData.password_repeat}
                        onChange={handleChange}
                        error={errors.password_repeat}
                    />
                    <button type="submit" className={`text-base-white ${buttonIsLoading ? 'bg-neutral-300 pointer-events-none' : 'bg-brand-700 pointer-events-auto'}`} disabled={buttonIsLoading}>
                        {buttonIsLoading ? <ButtonSpin /> : 'Registration'}
                    </button>
                    <Link to="/login" className={`button ${buttonIsLoading ? 'pointer-events-none bg-neutral-300' : 'pointer-events-auto bg-brand-50'} text-neutral-600 w-full`} aria-disabled={buttonIsLoading}>
                        Already have an account? Login
                    </Link>
                </form>
            </div>
        </section>
    )
}

export default RegistrationPage;