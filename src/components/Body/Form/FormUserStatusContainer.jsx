import React from 'react';
import { connect } from 'react-redux';
import { Form } from './Form';
import { Input } from '../Input/Input';
import { Button } from '@material-ui/core';
import { 
    getNameFormUserStatus, 
    getFieldsFormUserStatus, 
    getValidatorsFormUserStatus, 
    getSuccesFormUserStatus, 
    getLoadingFormUserStatus,
    getAdminFormUserStatus,
    getUserFormUserStatus,
    getErrorFormUserStatus,
    getErrorTextFormUserStatus
} from '../../../redux/selectors/formUserStatusSelector';
import { setUpdateFormUserStatusDataField, setValidateFormUserStatusField, handleSubmitFormUserStatus } from '../../../redux/redusers/formUserStatusReduser';
import { requestAuthUser } from '../../../redux/redusers/authReduser';

const FormUserStatusContainer = ({ formUserStatus, setUpdateFormUserStatusDataField, setValidateFormUserStatusField, requestAuthUser, handleSubmitFormUserStatus }) => {
    return (
        <>
            <Form   
                name={formUserStatus.name}
                onSubmit={e => handleSubmitFormUserStatus(e, formUserStatus)}
                error={formUserStatus.error}
                errorText={formUserStatus.errorText}
            >
                {
                    Object.values(formUserStatus.fields).map((field, index) => {
                        return (
                            (field.name === 'userStatus') ? 
                            <Input
                                key={index} 
                                type={field.type}
                                name={field.name}
                                placeholder={field.placeholder}
                                value={field.value}
                                error={field.error}
                                errorText={field.errorText}
                                onUpdateValue={e => setUpdateFormUserStatusDataField(e.target.value, e.target.name)}
                                onTouchedValidate={e => setValidateFormUserStatusField(e.target.value, e.target.name)}
                                
                            />:
                            formUserStatus.isAdmin ?
                            <Input
                                key={index} 
                                type={field.type}
                                name={field.name}
                                placeholder={field.placeholder}
                                value={field.value}
                                error={field.error}
                                errorText={field.errorText}
                                onUpdateValue={e => setUpdateFormUserStatusDataField(e.target.value, e.target.name)}
                                onTouchedValidate={e => setValidateFormUserStatusField(e.target.value, e.target.name)}
                                
                            />:
                            null
                        )
                    })
                }
                <Button
                    variant='contained' 
                    color='primary'
                    style={{margin: '20px auto 0'}}
                    type={formUserStatus.isAdmin ? 'submit' : formUserStatus.isUser ? 'button': 'submit'}
                    onClick={() => {formUserStatus.isUser && requestAuthUser() }}
                >
                    Войти
                </Button>
            </Form>
        </>
    )
}

const mapStateToProps = state => ({
    formUserStatus: {
        name: getNameFormUserStatus(state),
        fields: getFieldsFormUserStatus(state),
        validators: getValidatorsFormUserStatus(state),
        succesForm: getSuccesFormUserStatus(state),
        isLoading: getLoadingFormUserStatus(state),
        isAdmin: getAdminFormUserStatus(state),
        isUser: getUserFormUserStatus(state),
        error: getErrorFormUserStatus(state),
        errorText: getErrorTextFormUserStatus(state)
    }
})

const mapDispatchToProps =  {
    setUpdateFormUserStatusDataField, 
    setValidateFormUserStatusField, 
    requestAuthUser,
    handleSubmitFormUserStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(FormUserStatusContainer);