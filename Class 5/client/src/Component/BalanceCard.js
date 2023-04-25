import '../Styles/BalanceCard.css'
import MoreIcon from '../Assets/MoreIcon.svg'
const BalanceCard = () => {
    return (
        <div id='balance_card_container'>
            <div className='flex_space_between m_b'>
                <div>
                    <p id='total_bal_text'>Total Balance</p>
                    <h1 id='balance_text'>$ 2,548.00</h1>
                </div>
                <div>
                   <img src={MoreIcon} alt='more icon'/>
                </div>
            </div>
            <div className='flex_space_between'>
                <div>
                    <p className='income_expense_tag'>Income</p>
                    <h2 className='income_expense_amount'>$ 1,840.00</h2>
                </div>
                <div>
                    <p className='income_expense_tag'>Expense</p>
                    <h2 className='income_expense_amount'>$ 1,840.00</h2>
                </div>
            </div>
        </div>
    )
}

export default BalanceCard