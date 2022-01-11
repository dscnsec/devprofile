import { useState, useEffect } from 'react'
// import Skeleton from '@components/Skeleton'
import Skeleton from '../components/Skeleton'
import classes from '../styles/Dashboard.module.sass'
import {useSelector} from 'react-redux'
import LanguageDistributionChart from '../components/LanguageDistributionChart'

const Dashboard = () => {

    const [dataLoaded, setDataLoaded] = useState(false)

    const userDetails = useSelector(state => state.userDetails)
    useEffect(async () => {

        const fetchData = async () => {
            await fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    setDataLoaded(true)
                }, 3000)
                console.log(data)
            })
            .catch(err => console.log(err))
        }

        fetchData()
        
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
                            {/* section 1 */}
                            <section className={classes.introduction}>
                                <div className={classes.text}>
                                    <h1 className={classes.name}>{userDetails.name}</h1>
                                    <div className={classes.devName}>
                                            <h1>{userDetails.id}</h1>
                                        <img src="/icons/redirection.svg" alt="redirection" className={classes.redirectionIcon} />
                                    </div>
                                    <h1 className={classes.bio}>
                                        {userDetails.bio}
                                    </h1>
                                    <div className={classes.primaryIcons}>
                                        <div className={classes.primaryIconBox}>
                                            <img href="" src="/icons/location.svg" alt="location" className={classes.primaryIcon} />
                                            <div className={classes.primaryIconText} >{userDetails.location}</div>
                                        </div>
                                        <div className={classes.primaryIconBox}>
                                            <img href="" src="/icons/blog.svg" alt="blog" className={classes.primaryIcon} />
                                            <div className={classes.primaryIconText} >blog</div>
                                        </div>
                                        <div className={classes.primaryIconBox}>
                                            <img href={userDetails.email} src="/icons/mail.svg" alt="mail" className={classes.primaryIcon} />
                                            <div className={classes.primaryIconText} >email</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.avatarBox}>
                                    <a href={userDetails.avatar_url}>
                                    <img  src="/icons/avatar.svg" alt="Avatar" className={classes.avatar} />
                                    </a>
                                </div>
                            </section>

                            {/* repos section */}

                            <section className={classes.repos}>
                                <div className={classes.repoHeading}>
                                    <div className={classes.reposTitle}>
                                    repos
                                    </div>
                                    <div className={classes.seeAll}>
                                        see all
                                    </div>
                                </div>
                                <div className={classes.reposGrid}>
                                
                                    <div className={classes.repoCard}>
                                        <h1 className={classes.repoName}>hello</h1>
                                        <p className={classes.repoShortDesc}>Generates pickup lines to help improve your pathetic life</p>
                                        <p className={classes.repoDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nesciunt a! Tempora dignissimos quae necessitatibus, id est suscipit molli.</p>
                                    </div>
                                    <div className={classes.repoCard}>
                                        <h1 className={classes.repoName}>Pickup Line Gen</h1>
                                        <p className={classes.repoShortDesc}>Generates pickup lines to help improve your pathetic life</p>
                                        <p className={classes.repoDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nesciunt a! Tempora dignissimos quae necessitatibus, id est suscipit molli.</p>
                                    </div>
                                    <div className={classes.repoCard}>
                                        <h1 className={classes.repoName}>Pickup Line Gen</h1>
                                        <p className={classes.repoShortDesc}>Generates pickup lines to help improve your pathetic life</p>
                                        <p className={classes.repoDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nesciunt a! Tempora dignissimos quae necessitatibus, id est suscipit molli.</p>
                                    </div>
                                    <div className={classes.repoCard}>
                                        <h1 className={classes.repoName}>Pickup Line Gen</h1>
                                        <p className={classes.repoShortDesc}>Generates pickup lines to help improve your pathetic life</p>
                                        <p className={classes.repoDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nesciunt a! Tempora dignissimos quae necessitatibus, id est suscipit molli.</p>
                                    </div>
                                    <div className={classes.repoCard}>
                                        <h1 className={classes.repoName}>Pickup Line Gen</h1>
                                        <p className={classes.repoShortDesc}>Generates pickup lines to help improve your pathetic life</p>
                                        <p className={classes.repoDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nesciunt a! Tempora dignissimos quae necessitatibus, id est suscipit molli.</p>
                                    </div>
                                    <div className={classes.repoCard}>
                                        <h1 className={classes.repoName}>Pickup Line Gen</h1>
                                        <p className={classes.repoShortDesc}>Generates pickup lines to help improve your pathetic life</p>
                                        <p className={classes.repoDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nesciunt a! Tempora dignissimos quae necessitatibus, id est suscipit molli.</p>
                                    </div>
                                 
                                    
                                
                                    
                                
                                    {/* <div className={classes.repoCard}>
                                        <h1>Pickup Line Gen</h1>
                                        <p>Generates pickup lines to help improve your pathetic life</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nesciunt a! Tempora dignissimos quae necessitatibus, id est suscipit mollitia eum ipsam voluptatum, nam, reprehenderit neque distinctio quasi. Illo, necessitatibus reiciendis.</p>
                                    </div> */}
                                </div>

                            </section>

                            {/* languages */}
                            <section className={classes.languages}>
                                <div className={classes.languagesTitle}> 
                                    languages
                                </div>
                                <div className={classes.languagesChart}>
                                    <LanguageDistributionChart />
                                </div>
                            </section>

                            {/* know me */}
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
                            <section className={classes.quote}>
                            <div className={classes.goodQuote}>
                                “good things take time... my excuse for arriving late at work“
                            </div>
                            <div className={classes.author}>
                                - aditi tripathi
                            </div>
                            </section>
                            
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
