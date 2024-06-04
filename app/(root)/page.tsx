import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Mark', lastName: 'Sila', email: 'silwaks.co.ke'};
  return (
    <section className='home'> 
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.50}
          />
        </header>

          Recent transactions
      </div>
       <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 12354 }, {currentBalance: 178451}]}
      />
    </section>
  )
}

export default Home