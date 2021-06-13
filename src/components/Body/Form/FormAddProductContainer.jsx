import React from 'react';
import { connect } from 'react-redux';
import { Form } from './Form';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '@material-ui/core';
import { setUpdateFormAddProductDataField, setValidateFormAddProductField, handleSubmitFormAddProduct } from '../../../redux/redusers/formAddProduct';

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
}

const mapStateToProps = state => ({
    formAddProduct: {
        name: state.formAddProduct.name,
        fields: state.formAddProduct.fields,
        validators: state.formAddProduct.validators,
        succesForm: state.formAddProduct.succesForm,
        isLoading: state.formAddProduct.isLoading
    }
})

const mapDispatchToProps =  {
    setUpdateFormAddProductDataField, 
    setValidateFormAddProductField, 
    handleSubmitFormAddProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAddProductContainer);