import { useState, useEffect } from 'react'
// import Skeleton from '@components/Skeleton'
import Skeleton from '../components/Skeleton'
import classes from '../styles/Dashboard.module.sass'
import {useSelector, useDispatch} from 'react-redux'
import LanguageDistributionChart from '../components/LanguageDistributionChart'
import RepoCard from '../components/RepoCard'
import { editDetails } from '../redux/userDetailsSlice'
import axios from 'axios'
import randomer from 'complete-randomer'

const Dashboard = () => {

    const [dataLoaded, setDataLoaded] = useState(false)
    const dispatch = useDispatch()
    const userDetails = useSelector(state => state.userDetails)
    const devprofile_id = localStorage.getItem('devprofile_id')
    const randomQuote = randomer.QUOTES.SINGLE()
    // console.log(randomQuote)

    useEffect(async () => {

        const fetchData = async () => {

            const { data: userInDB } = await axios.get(`http://localhost:8000/api/profile/find/${devprofile_id}`)
  
            if(userInDB.found === true) {
                
                dispatch(editDetails(userInDB.data))
                setDataLoaded(true)

            } else {
                console.log('user not found')
            }
        }

        fetchData()
        
    }, [])

    // const calculateLanguages = () => {
        
    // }

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
                                        <a target="_blank" href={`https://github.com/${userDetails.id}`}> 
                                            <img src="/icons/redirection.svg" alt="redirection" className={classes.redirectionIcon} />
                                        </a>
                                    </div>
                                    <h1 className={classes.bio}>
                                        {userDetails.bio}
                                    </h1>
                                    <div className={classes.primaryIcons}>
                                        <div className={classes.primaryIconBox}>
                                            <img href="" src="/icons/location.svg" alt="location" className={classes.primaryIcon} />
                                            <div className={classes.primaryIconText}>{userDetails.location}</div>
                                        </div>
                                        <div className={classes.primaryIconBox}>
                                            <img href="" src="/icons/blog.svg" alt="blog" className={classes.primaryIcon} />
                                            <div className={classes.primaryIconText}><a target="_blank" href={userDetails.blog}>blog</a></div>
                                        </div>
                                        {userDetails.email && (<div className={classes.primaryIconBox}>
                                            <img href={userDetails.email} src="/icons/mail.svg" alt="mail" className={classes.primaryIcon} />
                                            <div className={classes.primaryIconText}><a target="_blank" href={`mailto:${userDetails.email}`}>email</a></div>
                                        </div>)}
                                    </div>
                                </div>
                                <div className={classes.avatarBox}>
                                    
                                    <img  src={userDetails.avatar_url} alt="Avatar" className={classes.avatar} />
                                    
                                </div>
                            </section>

                            {/* repos section */}

                            <section className={classes.repos}>
                                <div className={classes.repoHeading}>
                                    <div className={classes.reposTitle}>
                                    repos
                                    </div>
                                    <div className={classes.seeAll}>
                                        <a target="_blank"  href={`https://github.com/${userDetails.id}?tab=repositories`}>see all</a>
                                    </div>
                                </div>
                                <div className={classes.reposGrid}>

                                    {
                                        
                                        userDetails.repos && userDetails.repos.slice(0,6).map(
                                            (repo) => {
                                                return <RepoCard repo={repo} />
                                            }
                                        )
                                    }
                                
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
                                        <a target="_blank" href={userDetails.externalProfileLinks.github_id}>
                                            <img src="/icons/github.svg" alt="Github" />
                                        </a>
                                    </div>
                                    {/* codechef */}
                                    <div className={classes.codechef}>
                                        <a target="_blank" href={userDetails.externalProfileLinks.codechef_id}>
                                            <img src="/icons/codechef.svg" alt="codechef" />
                                        </a>
                                    </div>
                                    {/* linkedin */}
                                    <div className={classes.linkedin}>
                                        <a target="_blank" href={userDetails.externalProfileLinks.linkedin_id}>
                                            <img src="/icons/linkedin.svg" alt="linkedin" />
                                        </a>
                                    </div>
                                    {/* medium */}
                                    <div className={classes.medium}>
                                        <a target="_blank" href={userDetails.externalProfileLinks.medium_id}>
                                            <img src="/icons/medium.svg" alt="medium" />
                                        </a>
                                    </div>
                                    {/* twitter */}
                                    <div className={classes.twitter}>
                                        <a target="_blank" href={userDetails.externalProfileLinks.twitter_id}>
                                            <img src="/icons/twitter.svg" alt="twitter" />
                                        </a>
                                    </div>
                                    {/* codeforces */}
                                    <div className={classes.codeforces}>
                                        <a target="_blank" href={userDetails.externalProfileLinks.codeforces_id}>
                                        <img src="/icons/codeforces.svg" alt="codeforces" />
                                        </a>
                                    </div>

                                </div>
                            </section>
                            <section className={classes.quote}>
                            <div className={classes.goodQuote}>
                                {randomQuote.text}
                            </div>
                            <div className={classes.author}>
                                {randomQuote.author}
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
