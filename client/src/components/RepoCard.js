import classes from '../styles/RepoCard.module.sass'

const RepoCard = (props) => {

    const maxLengths = {
        name: 15,
        links: 17,
        description: 50
    }

    const title = props.repo.name.length > maxLengths.name ? props.repo.name.substring(0, maxLengths.name) + '...' : props.repo.name
    const description = props.repo.description ? (props.repo.description.length > maxLengths.description ? props.repo.description.substring(0, maxLengths.description) + '...' : props.repo.description) : 'No Description Provided'
    const link = props.repo.html_url.length > maxLengths.links ? props.repo.html_url.substring(0, maxLengths.links) + '...' : props.repo.html_url
    
    return (
            <div className={classes.repoCard}>
                <h1 className={classes.repoName}>{title}</h1>
                <p className={classes.repoShortDesc}>{link}</p>
                <p className={classes.repoDescription}>{description}</p>
            </div>
    )
}

export default RepoCard