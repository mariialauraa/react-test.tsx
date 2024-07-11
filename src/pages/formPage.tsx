import Form, { FormDataProps } from '../components/Form/form'

export default function FormPage() {

    const handleSubmitForm = (data: FormDataProps) => {
        console.log('Form Submit', data)
    }

    return (
        <div>
            <Form handleSubmitForm={handleSubmitForm}/>
        </div>
    )
}