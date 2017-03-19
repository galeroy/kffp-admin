import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Search from '../search';
import SearchResults from '../search/searchResults';
import SongList from './songList';

const mapStateToProps = state => ({
    auth: state.auth,
    show: state.show,
    playlist: state.playlist,
    search: state.search,
    nowPlaying: state.nowPlaying
});

const shouldShowCurrentPlaylist = obj => (obj ? Object.keys(obj).length > 1 : false);

const PlaylistForm = (props) => {
    const { playlist, search, nowPlaying, dispatch } = props;
    const { currentPlaylist } = playlist;
    const { searchResults, currentSearch } = search;

    if (shouldShowCurrentPlaylist(currentPlaylist)) {
        const { playlistDate } = currentPlaylist;
        const formattedDate = moment.utc(playlistDate).format('MMMM Do, YYYY');

        return (
            <div className="playlist-wrapper row">
                <h1 className="col col-md-12 flex-horizontal-center">{formattedDate}</h1>
                <Search />
                {!!searchResults.length &&
                    <SearchResults
                        searchResults={searchResults}
                        playlistId={currentPlaylist._id}
                        dispatch={dispatch}
                    />
                }
                {!searchResults.length &&
                    <SongList
                        currentPlaylist={currentPlaylist}
                        currentSearch={currentSearch}
                        nowPlaying={nowPlaying}
                        dispatch={dispatch}
                    />
                }
            </div>
        );
    }

    return (
        <div>
            {/* <h2 className="h2">No Currently Selected Playlist</h2> */}
        </div>
    );
};

export default connect(mapStateToProps)(PlaylistForm);
