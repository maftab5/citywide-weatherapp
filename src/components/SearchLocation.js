/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
/**
 *Component to get the user's input
 *for two cities.
 */
import PropTypes from 'prop-types';

const SearchLocation = ({ value, change, submit }) => (
         <>
        <div className="flex-input">

            <input
              type="text"
              name="locationOne"
              placeholder="Enter the location One"
              className="form-control"
              value={value.locationOne}
              onChange={change}
            />

            <input
              type="text"
              name="locationTwo"
              placeholder="Enter the location Two"
              className="form-control"
              value={value.locationTwo}
              onChange={change}
            />
             <input
               type="button"
               onClick={submit}
               className="btn btn-success"
               value="Search"
             />
        </div>

         </>
);

/**
 * shape is used foo Object propType
 */
SearchLocation.propTypes = {
  value: PropTypes.shape.isRequired,
  change: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default SearchLocation;
