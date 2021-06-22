import React from 'react';
import { connect } from 'react-redux';
import { Form } from './Form';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '@material-ui/core';
import { 
    getNameFormAddProduct, 
    getFieldsFormAddProduct, 
    getValidatorsFormAddProduct, 
    getSuccesFormAddProduct, 
    getLoadingFormAddProduct 
} from '../../../redux/selectors/formAddProductSelector';
import { setUpdateFormAddProductDataField, setValidateFormAddProductField, handleSubmitFormAddProduct } from '../../../redux/redusers/formAddProductReduser';

const FormAddProductContainer = ({ formAddProduct, setUpdateFormAddProductDataField, setValidateFormAddProductField, handleSubmitFormAddProduct }) => {
    return (
        <>
            <Form   
                name={formAddProduct.name}
                onSubmit={e => handleSubmitFormAddProduct(e, formAddProduct)}
            >
                {
                    Object.values(formAddProduct.fields).map((field, index) => {
                        return (
                            field.type === 'textarea' ? 
                            <Textarea
                                key={index} 
                                type={field.type}
                                name={field.name}
                                placeholder={field.placeholder}
                                value={field.value}
                                error={field.error}
                                errorText={field.errorText}
                                onUpdateValue={e => setUpdateFormAddProductDataField(e.target.value, e.target.name)}
                                onTouchedValidate={e => setValidateFormAddProductField(e.target.value, e.target.name)}
                                
                            />:
                            <Input
                                key={index} 
                                type={field.type}
                                name={field.name}
                                placeholder={field.placeholder}
                                value={field.value}
                                error={field.error}
                                errorText={field.errorText}
                                onUpdateValue={e => setUpdateFormAddProductDataField(e.target.value, e.target.name)}
                                onTouchedValidate={e => setValidateFormAddProductField(e.target.value, e.target.name)}
                                
                            />
                        )
                    })
                }
                <Button
                    variant='contained' 
                    color='primary'
                    style={{maxWidth: '288px', width: '100%', margin: '20px auto 0'}}
                    type='submit'
                >
                    Добавить товар
                </Button>
            </Form>
        </>
    )
};

const mapStateToProps = state => ({
    formAddProduct: {
        name: getNameFormAddProduct(state),
        fields: getFieldsFormAddProduct(state),
        validators: getValidatorsFormAddProduct(state),
        succesForm: getSuccesFormAddProduct(state),
        isLoading: getLoadingFormAddProduct(state)
    }
});

const mapDispatchToProps =  {
    setUpdateFormAddProductDataField, 
    setValidateFormAddProductField, 
    handleSubmitFormAddProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAddProductContainer);