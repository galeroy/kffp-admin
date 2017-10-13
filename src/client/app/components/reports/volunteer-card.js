import React, { PropTypes } from 'react';
import { CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import { updateField } from '../../actions/volunteerActions';

const VolunteerCard = ({ submitAction, userId, startDate, endDate, dispatch }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        return startDate && endDate &&
            dispatch(submitAction(startDate, endDate, userId));
    };

    return (
        <div>
            <CardText>
                <DatePicker
                    hintText="Start Date"
                    onChange={
                        (n, date) => dispatch(updateField('startDate', date))
                    }
                />
                <DatePicker
                    hintText="End Date"
                    onChange={
                        (n, date) => dispatch(updateField('endDate', date))
                    }
                />
            </CardText>
            <CardActions>
                <RaisedButton
                    label="Submit"
                    onClick={handleSubmit}
                />
            </CardActions>
        </div>
    );
};

VolunteerCard.propTypes = {
    dispatch: PropTypes.func,
    endDate: PropTypes.instanceOf(Date),
    startDate: PropTypes.instanceOf(Date),
    submitAction: PropTypes.func,
    userId: PropTypes.string
};

export default VolunteerCard;