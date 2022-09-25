import { Router } from 'express';
import userTypes from './user-type.routes';
import filmGenreTypes from './film-genre-type.routes';
import staffTypes from './staff-type.routes';
import filmFormatTypes from './film-format-type.routes';
import awardTypes from './award-type.routes';
import awardCategories from './award-category.routes';
import celebrityTypes from './celebrity-type.routes';
import celebrityRoles from './celebrity-role.routes';
import performanceTypes from './performance-type.routes';
import filmLanguages from './film-language.routes';
import country from './country.routes';
import filmSong from './film-song.routes';
import filmCategories from './film-category.routes';
import filmRatings from './film-rating.routes';
import franchises from './franchise.routes';
import distributors from './distributor.routes';
import films from './film.routes';
import staffs from './staff.routes';
import celebrities from './celebrity.routes';
import filmDetails from './film-detail.routes';
import filmSeasons from './film-season.routes';
import filmSeasonEpisodes from './film-season-episode.routes';
import users from './user.routes';
import filmFormats from './film-format.routes';
import filmStaffs from './film-staff.routes';
import filmCastings from './film-casting.routes';
import filmGenres from './film-genre.routes';
import filmSoundtracks from './film-soundtrack.routes';
import filmAwards from './film-award.routes';
import celebrityAwards from './celebrity-award.routes';
import sagas from './saga.routes';
import filmDubbings from './film-dubbing.routes';
import celebrityPictures from './celebrity-picture.routes';
import filmPictures from './film-picture.routes';
import filmFeedbacks from './film-feedback.routes';


const routes = Router();

routes.use('/user-types', userTypes);
routes.use('/film-genre-types', filmGenreTypes);
routes.use('/staff-types', staffTypes);
routes.use('/film-format-types', filmFormatTypes);
routes.use('/award-types', awardTypes);
routes.use('/award-categories', awardCategories);
routes.use('/celebrity-types', celebrityTypes);
routes.use('/celebrity-roles', celebrityRoles);
routes.use('/performance-types', performanceTypes);
routes.use('/film-languages', filmLanguages);
routes.use('/countries',country);
routes.use('/film-songs',filmSong);
routes.use('/film-categories', filmCategories);
routes.use('/film-ratings', filmRatings);
routes.use('/franchises', franchises);
routes.use('/distributors', distributors);
routes.use('/films', films);
routes.use('/staffs',staffs)
routes.use('/celebrities',celebrities)
routes.use('/film-details',filmDetails)
routes.use('/film-seasons',filmSeasons)
routes.use('/film-season-episodes',filmSeasonEpisodes)
routes.use('/users',users);
routes.use('/film-formats',filmFormats)
routes.use('/film-staffs',filmStaffs);
routes.use('/film-castings',filmCastings)
routes.use('/film-genres',filmGenres)
routes.use('/film-soundtracks',filmSoundtracks)
routes.use('/film-awards',filmAwards)
routes.use('/celebrity-awards',celebrityAwards)
routes.use('/saga',sagas)
routes.use('/film-dubbings',filmDubbings)
routes.use('/celebrity-pictures',celebrityPictures)
routes.use('/film-pictures',filmPictures)
routes.use('/film-feedbacks',filmFeedbacks)

export default routes;
