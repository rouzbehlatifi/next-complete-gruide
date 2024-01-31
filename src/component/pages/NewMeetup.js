import { head } from "shelljs";
import { useHistory } from '../component/meetups/NewMeetupForm';
import NewMeetupForm from "../meetups/NewMeetupForm";

function NewMeetupPage(){
    const history = useHistory();
    function addMeetupHandler(meetupData){
        fetch(
            'url get from firebase',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                header: {
                    'Contrnt-Type': 'application/json'
                }        
            }

        ).then(() => {
          history.replace('/');  

        });
    }
    return (
    <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />

    </section>
    ); 

}
export default NewMeetupPage;