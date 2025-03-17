import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

const RecipeSchema = Yup.object().shape({
    title: Yup.string().required('Zorunlu alan'),
    ingredients: Yup.string().required('Zorunlu alan'),
    instructions: Yup.string().required('Zorunlu alan'),
});

const AddRecipe = () => {
    return (
        <div className="min-h-screen bg-[#121212] p-8">
            <h1 className="text-3xl font-bold text-[#E0E0E0] mb-8">Yeni Tarif Ekle</h1>
            <Formik
                initialValues={{title: '', ingredients: '', instructions: ''}}
                validationSchema={RecipeSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({errors, touched}) => (
                    <Form className="space-y-4">
                        <div>
                            <Field
                                name="title"
                                placeholder="Tarif Adı"
                                className="w-full p-2 bg-[#2C2C2C] text-[#E0E0E0] rounded"
                            />
                            {errors.title && touched.title && (
                                <div className="text-[#EF9A9A] text-sm mt-1">{errors.title}</div>
                            )}
                        </div>
                        <div>
                            <Field
                                name="ingredients"
                                as="textarea"
                                placeholder="Malzemeler"
                                className="w-full p-2 bg-[#2C2C2C] text-[#E0E0E0] rounded"
                            />
                            {errors.ingredients && touched.ingredients && (
                                <div className="text-[#EF9A9A] text-sm mt-1">{errors.ingredients}</div>
                            )}
                        </div>
                        <div>
                            <Field
                                name="instructions"
                                as="textarea"
                                placeholder="Hazırlanışı"
                                className="w-full p-2 bg-[#2C2C2C] text-[#E0E0E0] rounded"
                            />
                            {errors.instructions && touched.instructions && (
                                <div className="text-[#EF9A9A] text-sm mt-1">{errors.instructions}</div>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="bg-[#64B5F6] text-[#121212] px-4 py-2 rounded hover:bg-[#42A5F5]"
                        >
                            Tarifi Ekle
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddRecipe;