import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Header from './layouts/Header';
import HeaderTitle from './sections/HeaderTitle';
import AdditionalContent from './sections/AdditionalContent';
import SendNewsLetter from './sections/SendNewsLetter';
import LinksBlog from './sections/LinksBlog';
import Footer from './layouts/Footer';
import OtherBlogs from './sections/OtherBlogs';
import AnotherBlogsDemo from './sections/AnotherBlogsDemo';
import { Toaster } from 'react-hot-toast';
import ReactLenis from 'lenis/react';
import { ScrollToTop } from './utils/ScrollToTop';
import { AuthProvider } from './context/AuthContext';
import { lazy, Suspense } from 'react';
import ButtonSpin from './components/ui/ButtonSpin';
import { ProtectedRoute } from './features/ProtectedRoute';

const BlogCatalog = lazy(() => import('./components/blog/Catalog'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'));

function App() {

  const [searchValue, onSearchValue] = useState('');

  const lenisOptions = {
    duration: 1.2,
    easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    autoRaf: true,
  }

  return (
    <ReactLenis root options={lenisOptions}>
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop/>
          <Toaster 
            position='top-right'
            reverseOrder={false}
            containerStyle={{
              top: 80,
            }}
            toastOptions={{
              className: 'bg-base-white text-neutral-900 border border-neutral-300 text-sm font-medium px-4 py-3 shadow-lg rounded-lg transition-colors duration-300',
              duration: 3000,
              success: {
                iconTheme: {
                  primary: 'var(--color-brand-700)',
                  secondary: 'var(--color-base-white)',
                }
              },
              error: {
                iconTheme: {
                  primary: '#ef4444',
                  secondary: 'var(--color-base-white)'
                }
              }
            }}
          />
          <Header />

          <Suspense fallback={<div className='flex justify-center py-20 text-neutral-900'><ButtonSpin/></div>}>
            <Routes>
            
                <Route path="/" element={
                    <main>
                      <HeaderTitle searchValue={searchValue} onSearchChange={onSearchValue} />
                      <BlogCatalog query={searchValue} baseQuantity={6}/>
                      <AdditionalContent/>
                      <SendNewsLetter/>
                      <LinksBlog/>
                      <Footer/>
                    </main>
                  }
                />
                <Route path="/blog/:id" element={
                    <main>
                      <BlogDetailPage />
                      <OtherBlogs/>
                      <AnotherBlogsDemo/>
                      <LinksBlog/>
                      <Footer/>
                    </main>
                  }
                />
                <Route path="/login" element={
                    <main>
                      <LoginPage/>
                      <Footer/>
                    </main>
                  }
                />
                <Route path="/registration" element={
                    <main>
                      <RegistrationPage/>
                      <Footer/>
                    </main>
                  }
                />
                <Route path="/admin" element={
                  <ProtectedRoute>
                    <AdditionalContent/>
                  </ProtectedRoute>
                }/>
            
            </Routes>
          </Suspense>

        </BrowserRouter>
      </AuthProvider>
    </ReactLenis>
  )  
}

export default App;
