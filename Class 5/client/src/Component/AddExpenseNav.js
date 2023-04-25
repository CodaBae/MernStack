import ArrowIcon from '../Assets/ArrowIcon.svg'
import MoreIcon from '../Assets/MoreIcon.svg'


const AddExpenseNav  = () =>{

    return(
        <div id='Add_expense_nav'>
            <div><img src={ArrowIcon} /></div>
            <div><h3> Add Expense</h3></div>
            <div><img src={MoreIcon}  /></div>
        </div>
    )

}

export default AddExpenseNav