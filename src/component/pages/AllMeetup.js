import { useState , useEffect} from "react";
import MeetupList from "../meetups/MeetupList";

// const DUMMY_DATA = [
//     {
//         id: 'm1',
//         title: 'This is  first meetup',
//         image:
//             'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Meetupstreet 5, 12345 Meetup City',
//         description:
//             'This is a first, amazing meetup which you definitely should not miss',

//     },
//     {
//         id: 'm2',
//         title: 'This is second meetup',
//         image:
//             'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Meetupstreet 5, 12345 Meetup City',
//         description:
//             'This is a first,amazing meetup which you definitely should not miss'
//     }

// ];

 function AllMeetupsPage(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('same url that get from firebase'
        ).then(response => {
          return  response.json();
        }).then(data => {
            const meetups = [];

            for (const key in data){
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetup.push(meetup);
            }
            setIsLoading(false);
            setLoadMeetups(data);
    
    });

    }, []); 

if (isLoading){
    return (
        <section>
            <p>Loading...</p>
        </section>
    );
}

    return (
        <section>
            <h1>All Meetups </h1>
            <MeetupList meetups={DUMMY_DATA} />
        </section>
    );

}
export default AllMeetupsPage;