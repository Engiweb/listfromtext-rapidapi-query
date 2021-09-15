import FormData from 'form-data';
import { listfromtextResponse } from '../../@types/types';
declare type FormSubmit = {
    formData: FormData;
    options: FormData.SubmitOptions;
};
declare const submitFormData: ({ formData, options, }: FormSubmit) => Promise<listfromtextResponse>;
export default submitFormData;
