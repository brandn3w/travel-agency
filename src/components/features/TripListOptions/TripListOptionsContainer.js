import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeDuration, addTripTag, removeTripTag} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // DONE - add more dispatchers for other filters
  addTripTag: tag => dispatch(addTripTag(tag)),
  removeTripTag: tag => dispatch(removeTripTag(tag)),
  changeTripDuration: duration => dispatch(changeDuration(duration)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
