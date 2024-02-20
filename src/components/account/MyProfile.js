import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


const MyProfile = () => {

  const {token} = useSelector(state => state.user)


    useEffect(() => {
        if(token){
          loadProfileData()
        }
    }, [token])

    const [userData, setUserData] = useState({})

    const loadProfileData = async() => {
        // const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+'/user/profile')
        setUserData({name : "User"})
    }

    return(
       <>
            <h2 className="text-xl font-bold text-center">Profilim</h2>
            {!userData.name && <div className="mt-12 text-center"><span className="loading"></span></div>}
            {userData.name && <div className="overflow-x-auto">
  <table className="table table-zebra">
    <tbody>
      <tr>
        <td></td>
      </tr>
      {/* row 2 */}
      <tr>
        <td>İsim</td>
        <td className="font-medium">Özge</td>
        
      </tr>
      <tr>
        <td>Soyisim</td>
        <td className="font-medium">YILMAZ</td>
        
      </tr>
      {/* row 3 */}
      <tr>
        <td>Mail Adresi</td>
        <td className="font-medium">ozgeyilmaz@gmail.com</td>
      </tr>
    </tbody>
  </table>
</div>}
       </>
    )
}

export default MyProfile