import {Link, useNavigate} from 'react-router-dom';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import supabase from "../../services/supabase.tsx";
import {toast} from "react-hot-toast";

const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('Geçersiz email').required('Zorunlu alan'),
    password: Yup.string().min(6, 'En az 6 karakter').required('Şifre gerekli'),
});

const RegisterPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-[#121212] flex items-center justify-center">
            <div className="bg-[#1E1E1E] p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-[#E0E0E0] mb-6">Kayıt Ol</h2>
                <Formik
                    initialValues={{email: '', password: ''}}
                    validationSchema={RegisterSchema}
                    onSubmit={async (values, {setSubmitting}) => {
                        try {
                            const {data, error} = await supabase.auth.signUp({
                                email: values.email,
                                password: values.password,
                            });

                            if (error) {
                                toast.error('Kayıt başarısız: ' + error.message);
                                return;
                            }

                            toast.success('Kayıt başarılı! Lütfen giriş yapın.');
                            navigate('/login');

                        } catch (error) {
                            toast.error('Beklenmeyen bir hata oluştu');
                        } finally {
                            setSubmitting(false);
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
                                disabled={isSubmitting}
                                className={`w-full py-2 rounded transition-colors ${
                                    isSubmitting
                                        ? 'bg-gray-600 cursor-not-allowed'
                                        : 'bg-[#64B5F6] hover:bg-[#42A5F5] text-[#121212]'
                                }`}
                            >
                                {isSubmitting ? 'Kayıt Olunuyor...' : 'Kayıt Ol'}
                            </button>
                        </Form>
                    )}
                </Formik>
                <div className="mt-4 text-center text-[#E0E0E0]">
                    Zaten hesabın var mı?{' '}
                    <Link to="/login" className="text-[#64B5F6] hover:underline">
                        Giriş Yap
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;