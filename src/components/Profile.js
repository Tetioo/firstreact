function Profile(props) { //function-based component

    const {name, lastname} = props //takes object and destructure
   // console.log(props) //use of props

    return (
    <h1>
        Name: {name} {lastname} 
    </h1>
    )
}
export default Profile;