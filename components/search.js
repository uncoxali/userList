// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';

// //components
// import Search from './Search';

// const Search = props => {

//     const [filteredCountries, setFilteredCountries] = useState([]);
//     const [search, setSearch] = useState('');

//     useEffect(() => {
//         setFilteredCountries(
//             props.users.filter((user) =>
//                 user.lastName.toLowerCase().includes(search.toLowerCase())
//             )
//         );
//     }, [search, props.users]);


//     return (
//         <div className="container">
//             <div className="flexbox">
//                 <div className="search">
//                     <div>
//                         <input type="text" placeholder="Search . . ." onChange={(e) => setSearch(e.target.value)} />
//                     </div>
//                 </div>
//             </div>
//             <ul className="wrapper">
//                 {
//                     filteredCountries.map(user => {
//                         return (
//                             <li className="nav-link item" key={user.id}>
//                                 <img className="avatar" src={user.picture} alt="Ash" />
//                                 <Link href="/users/[id]" as={`/users/${user.id}`}>
//                                     <a className="link">{user.lastName}</a>
//                                 </Link>
//                             </li>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }

// export default Search;