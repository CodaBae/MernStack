import '../Styles/Home.css'

import GreetingText from '../Component/GreetingText'
import BalanceCard from '../Component/BalanceCard'
import ExpenseList from '../Component/ExpenseList'
import AddExpenseBtn from '../Component/AddExpenseBtn'

const Home = () => {
return(
    <>
    <div id='green_canva'>
        <GreetingText />
        <BalanceCard />
        <ExpenseList />
        <AddExpenseBtn/>
    </div>
    
    </>
)
}

export default Home