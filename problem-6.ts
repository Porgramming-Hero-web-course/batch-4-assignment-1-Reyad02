{
    // Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    type ProfilePartial = Partial<Profile>

    function updateProfile(profile: Profile, obj: ProfilePartial): Profile {

        const objKeys = Object.keys(obj);

        objKeys.forEach(item => {
            profile[item] = obj[item]
        })

        return profile
    }

    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));

}