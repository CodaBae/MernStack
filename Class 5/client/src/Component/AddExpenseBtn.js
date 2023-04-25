import Plus from '../Assets/Plus.svg'
import '../Styles/AddExpenseBtn.css'

const AddExpenseBtn = () => {
    return (<div id='Add_btn_con'>
        <div id='Add_btn_div'>
        <img src={Plus} alt='' />
    </div>
    </div>)
}

export default AddExpenseBtn