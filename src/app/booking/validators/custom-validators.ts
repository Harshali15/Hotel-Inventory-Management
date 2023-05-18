import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidators {

    static ValidateName(control: AbstractControl) {
        const value= control.value as string;
        if(value.includes('test')){
            return {
                invalidName: true
            }
        }
        return null
    }

    static ValidateSpecialchar(char: string) {
        return (control: AbstractControl)=>
        {
            const value = control. value as string;
            if(value.includes(char)){
            return {
                invalidSpecialchar: true,
            }
        }
        return null;
        
    }}

    static validatedate (control: FormGroup) {
        const checkinDate: any = new Date(control.get ('checkinDate')?. value) ;
        const checkoutDate: any = new Date(control.get ('checkoutDate')?. value);
        const diffTime = checkoutDate-checkinDate;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays <= 0){
            control.get('checkoutDate')?.setErrors({invalidCheckoutDate: true});
             return {
                invalidate: true, 
            }
        }
        return true;
        }
}
