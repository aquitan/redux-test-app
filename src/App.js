import { useDispatch, useSelector } from "react-redux";
import { addCashAction, getCashAction } from "./store/cashReducer";
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";
import './App.css'
import { fetchCustomers } from "./asyncActions/customers";

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  const addCash = (cash) => {
    dispatch(addCashAction(cash))
  }
  const getCash = (cash) => {
    dispatch(getCashAction(cash))
  }

  const addCustomer = (name) => {
    let customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  const loadCustomers = () => {
    dispatch(fetchCustomers())
  }

  return (
    <div className="App">
      
      <div className='block'>
        <h2>Наличные: {cash}</h2>
        <div className="flex">
          <button className="button-cash-add" onClick={() => addCash(Number(prompt()))}>Положить на счет</button>
          <button  className="button-cash-get"  onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        </div>
      </div>
      <hr/>
      <div className="block">
        <div className="flex">
          <button className='button-customer-add' onClick={() => addCustomer(prompt())}>Добавить клиента</button>
          <button className='button-all-add' onClick={loadCustomers}>Загрузить клиентов из базы</button>
        </div>
        {
          customers.length ? 
            <div className='block'>
              <h2>Клиенты: {customers.length}</h2>
              <div>
                {
                  customers.map(customer => {
                    return <div
                     key={customer.id}
                     onClick={() => removeCustomer(customer)}
                     className="customer">{customer.name}</div>
                  })
                }
              </div>
            </div>
            : <h2>Клиентов пока нет!</h2>
        }
      </div>
    </div>
  );
}

export default App;
