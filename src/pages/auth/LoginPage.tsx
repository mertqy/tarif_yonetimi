import {Link, useNavigate} from 'react-router-dom';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import useAuth from '../../hooks/useAuth.tsx'; // AuthContext'ten useAuth hook'unu import et
import {toast} from 'react-hot-toast';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Geçersiz email').required('Zorunlu alan'),
    password: Yup.string().required('Şifre gerekli'),
});

const LoginPage = () => {
    const {login} = useAuth(); // AuthContext'ten login fonksiyonunu al
    const navigate = useNavigate(); // Yönlendirme için useNavigate hook'unu kullan

    return (
        <div className="min-h-screen bg-[#121212] flex items-center justify-center">
            <div className="bg-[#1E1E1E] p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-[#E0E0E0] mb-6">Giriş Yap</h2>
                <Formik
                    initialValues={{email: '', password: ''}}
                    validationSchema={LoginSchema}
                    onSubmit={async (values, {setSubmitting}) => {
                        try {
                            await login(values.email, values.password); // AuthContext'teki login fonksiyonunu çağır
                            toast.success('Giriş başarılı!');
                            navigate('/home'); // Giriş başarılıysa ana sayfaya yönlendir
                        } catch (error) {
                            toast.error('Giriş başarısız! Lütfen bilgilerinizi kontrol edin.');
                        } finally {
                            setSubmitting(false); // Formun yeniden gönderilebilir olmasını sağla
                        }
                    }}
                >
                    {({errors, touched, isSubmitting}) => (
                        <Form className="space-y-4">
                            <div>
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-2 bg-[#2C2C2C] text-[#E0E0E0] rounded"
                                />
                                {errors.email && touched.email && (
                                    <div className="text-[#EF9A9A] text-sm mt-1">{errors.email}</div>
                                )}
                            </div>
                            <div>
                                <Field
                                    name="password"
                                    type="password"
                                    placeholder="Şifre"
                                    className="w-full p-2 bg-[#2C2C2C] text-[#E0E0E0] rounded"
                                />
                                {errors.password && touched.password && (
                                    <div className="text-[#EF9A9A] text-sm mt-1">{errors.password}</div>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting} // Form gönderilirken butonu devre dışı bırak
                                className="w-full bg-[#64B5F6] text-[#121212] py-2 rounded hover:bg-[#42A5F5] disabled:opacity-50"
                            >
                                {isSubmitting ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
                            </button>
                        </Form>
                    )}
                </Formik>
                <div className="mt-4 text-center text-[#E0E0E0]">
                    Hesabın yok mu?{' '}
                    <Link to="/register" className="text-[#64B5F6] hover:underline">
                        Kayıt Ol
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;