
import { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Form, Label, Input, FormGroup, Button } from "reactstrap";

const MemberForm = (props) => {
    const [member, setMember] = useState({
        id: "",
        name: "",
        role: "",
        age: ""
    });
    const {teamMembers ,updateTeamList} = props;
    const changeHandler = (e) => {
        setMember({ ...member, [e.target.id]: e.target.value })

    }
    useEffect(() => {
        console.log("member ", member);
      }, [member]);
/*     const [teamarr,setTeamarr] = useState(props.teamMembers);*/

    const submitHandler = (e) => {
        e.preventDefault();
        updateTeamList([...teamMembers, member]);
       
    }
    useEffect(() => {
        console.log("member ", teamMembers);
    }, [props.teamMembers]); 



    return (
        <div>
            

            <Form onSubmit={submitHandler}>
                <FormGroup>
                    <Label for="name">
                        Name:
                    </Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Member Name"
                        type="text"
                        onChange={changeHandler}
                        value={member.name}

                    />
                </FormGroup>
                <FormGroup>
                    <Label for="role">
                        Role:
                    </Label>
                    <Input
                        id="role"
                        name="role"
                        placeholder="Member Role"
                        type="text"
                        onChange={changeHandler}
                        value={member.role}

                    />
                </FormGroup>
                <FormGroup>
                    <Label for="age">
                        Age:
                    </Label>
                    <Input
                        id="age"
                        name="age"
                        placeholder="Age"
                        type="number"
                        onChange={changeHandler}
                        value={member.age}

                    />
                </FormGroup>
                <FormGroup>
                    <Label for="id">
                        ID:
                    </Label>
                    <Input
                        id="id"
                        name="id"
                        placeholder="ID"
                        type="number"
                        onChange={changeHandler}
                        value={member.id}

                    />
                </FormGroup>
                <Button type="submit" color="primary">
                    Save
                </Button>
            </Form>
        </div>
    )
}
export default MemberForm;