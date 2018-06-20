var movies = [
  {
    id: 1,
    title: 'Żywot Briana',
    desc: 'Film o życiu',
    poster: './images/brian.jpg',
    alt: 'Brian'
  },
  {
    id: 2,
    title: 'Król lew',
    desc: 'Film o królu sawanny',
    poster: './images/lion.jpg',
    alt: 'Lion king'
  },
  {
    id: 3,
    title: 'Blade Runner',
    desc: 'Film o androdidach',
    poster: './images/blade.jpg',
    alt: "Blade Runner"
  },
  {
    id: 4,
    title: 'Star Wars',
    desc: 'Film o lataniu w kosmosie',
    poster: './images/starwars.jpg',
    alt: "Star Wars"
  }
];

var MoviesList = React.createClass({
  propTypes: {
    moviesList: React.PropTypes.array.isRequired
  },

  render: function () {
    const itemMovie = this.props.moviesList.map(function (item) {
      return React.createElement(Movie, {movie: item, key: item.id})
    });
    return (
      React.createElement('ul', {}, itemMovie)
    );
  }
});
const Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },

  render: function () {
    return (
      React.createElement('li', {},
        React.createElement(MovieTitle, {movieTitle: this.props.movie.title}),
        React.createElement(MovieDesc, {movieDesc: this.props.movie.desc}),
        React.createElement(MoviePoster, {moviePoster: this.props.movie.poster})
      )
    );
  }
});

const MovieTitle = React.createClass({
  propTypes: {
    movieTitle: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      React.createElement('h2', {}, this.props.movieTitle)
    );
  }
});

const MovieDesc = React.createClass({
  propTypes: {
    movieDesc: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      React.createElement('p', {}, this.props.movieDesc)
    );
  }
});

const MoviePoster = React.createClass({
  propTypes: {
    moviePoster: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      React.createElement('img', {src: this.props.moviePoster})
    );
  }
});

const app = React.createClass({
  render: function () {
    return (
      React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement(MoviesList, {moviesList: movies})
      )
    );
  }
});

ReactDOM.render(React.createElement(app), document.getElementById('app'));