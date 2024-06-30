import React, {useState,useEffect} from 'react';
import { useAuth } from '../../contexts/authContext';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { app } from '../../firebase/firebase';

// Simple Profile Page Component
function Profile() {
    const { currentUser } = useAuth();
    const [userData, setUserData] = useState({ firstName: '', lastName: '', email: '' });
    const db = getFirestore(app);

    useEffect(() => {
        const fetchUserData = async () => {
            if (currentUser) {
                const docRef = doc(db, "users", currentUser.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setUserData(docSnap.data());
                } else {
                    console.log("No such document!");
                }
            }
        };

        fetchUserData();
    }, [currentUser]);

  return (
    <div className="profile max-w-4xl mx-auto mt-10 shadow-lg p-5">
    <h1 className="text-3xl font-bold mb-4">Profile Page</h1>
    <div className="profile-info">
      <img src="profile-pic-placeholder.png" alt="Profile" className="w-32 h-32 rounded-full mx-auto" />
      <h2 className="text-xl font-semibold mt-3">{userData.firstName} {userData.lastName}</h2>
      <p className="text-gray-600">{userData.email || currentUser.email}</p>
    
    </div>
  </div>
  );
}

export default Profile;