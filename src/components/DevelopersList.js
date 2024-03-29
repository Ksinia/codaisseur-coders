import React from "react";
import { connect } from "react-redux";
import { fetchDevelopers } from "../store/developers/actions";
import Developer from "./Developer";
import { Link } from "react-router-dom";

// The "unconnected" inner component:
class DevelopersList extends React.Component {
  componentDidMount() {
    // dispatch the "thunk" (function) itself
    this.props.dispatch(fetchDevelopers);
    console.log("this should happen first");
  }

  render() {
    const loading = !this.props.devs;
    return (
      <div>
        <h1>Codaisseur developers</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>We have {this.props.devs.count} developers!</p>
            <ul>
              {[...this.props.devs.rows]
                .sort(function(a, b) {
                  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                  if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }

                  // names must be equal
                  return 0;
                })
                //   this.props.devs.rows
                .map(dev => {
                  return (
                    <Link key={dev.id} to={`/developers/${dev.id}`}>
                      <Developer
                        name={dev.name}
                        // email={dev.email}  // don't show emails to everyone. Show emails only on detail page and when user is logged in
                      />
                    </Link>
                  );
                })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

// The wrapper component that connects to the Redux store
//  and passes down props derived from the store's state
//  to the inner component:

function mapStateToProps(reduxState) {
  // console.log("redux state?", reduxState);
  return {
    devs: reduxState.developers.developers
  };
}
// ...which is what we export as the default (only) export
export default connect(mapStateToProps)(DevelopersList);
