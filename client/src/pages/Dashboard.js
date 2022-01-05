import { useState, useEffect } from 'react'
// import Skeleton from '@components/Skeleton'
import Skeleton from '../components/Skeleton'
import classes from '../styles/Dashboard.module.sass'

const Dashboard = () => {

    const [dataLoaded, setDataLoaded] = useState(false)

    useEffect(async () => {

        await fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // setDataLoaded(true)
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <div className={classes.container}>

            <nav>
                <div className={classes.logo}>devprofile</div>
                <div className={classes.search}>
                    <img src="/icons/searchIcon.svg" alt="search icon" className={classes.searchIcon} />
                    <input type="text" placeholder="search" className={classes.searchBox} />
                </div>
                <div className={classes.logout}>
                    <img src="/icons/logoutIcon.svg" alt="logout icon" className={classes.logoutIcon} />
                </div>
            </nav>

            

            <main>

                {
                    dataLoaded ? (
                        <>
                            <h1 className={classes.test}>Prof. Severus Snape</h1>

                            <section className={classes.languages}>
                                <div className={classes.languagesTitle}> 
                                    languages
                                </div>
                            </section>

                            <section className={classes.knowMe}>
                                <div className={classes.knowMeTitle}>
                                    know me
                                </div>
                                <div className={classes.iconSet}>
                                    <div className={classes.github}>
                                        <img src="/icons/github.svg" alt="Github" />
                                    </div>
                                    <span>
                                        github
                                    </span>
                                    {/* codechef */}
                                    <div className={classes.codechef}>
                                        <img src="/icons/codechef.svg" alt="codechef" />
                                    </div>
                                    <span>
                                    codechef
                                    </span>
                                    {/* linkedin */}
                                    <div className={classes.linkedin}>
                                        <img src="/icons/linkedin.svg" alt="linkedin" />
                                    </div>
                                    <span>
                                    linkedin
                                    </span>
                                    {/* medium */}
                                    <div className={classes.medium}>
                                        <img src="/icons/medium.svg" alt="medium" />
                                    </div>
                                    <span>
                                    medium
                                    </span>
                                    {/* twitter */}
                                    <div className={classes.twitter}>
                                        <img src="/icons/twitter.svg" alt="twitter" />
                                    </div>
                                    <span>
                                    twitter
                                    </span>
                                    {/* codeforces */}
                                    <div className={classes.codeforces}>
                                        <img src="/icons/codeforces.svg" alt="codeforces" />
                                    </div>
                                    <span>
                                    codeforces
                                    </span>

                                </div>
                            </section>

                            <div className={classes.quote}>
                                “good things take time... my excuse for arriving late at work“
                            </div>
                        </>
                    ) : (
                        <Skeleton />
                    )
                }

                
            </main>
            
            <footer>
                made with 🚀 by gdsc nsec in woc
            </footer>
        </div>
        












 
    )
}

export default Dashboard
