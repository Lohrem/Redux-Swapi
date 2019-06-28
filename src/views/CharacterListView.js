import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
// import actions
import { getCharacters } from '../actions'

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      fetching: false,
      error: ''
    }
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <div>Fetching data, please wait</div>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.fetching
})
export default connect(mapStateToProps, { getCharacters })(CharacterListView);
