// Init seoul object
const seoul = new Seoul();
function getInfo() {
    seoul.getInfo()
        .then(results => {
            console.log(results);
        })
        .catch(err => console.log(err));
}

const ui = new UI();

// Get info on DOM load
document.addEventListener('DOMContentLoad', getInfo);

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;


    const profile = document.getElementById('profile');
    //COT_VALUE_04
    if (userText !== '') {
        // Make http call
        seoul.getInfo(userText)
            .then(data => {
                let rows = new Array();
                for (let i = 0; i < 354; i++) {
                    rows.push(data.MgisArtPlace.row[i]);
                    //COT_CONTS_NAME
                    //COT_VALUE_04 
                }
                rows.forEach(function (row) {
                    if (row.COT_CONTS_NAME.includes(userText)) {
                        //console.log(name);
                        // Create li element
                        const li = document.createElement('li');
                        // Add class
                        li.className = 'list-group-item';
                        // li.setAttribute('data-toggle', 'collapse');
                        // li.setAttribute('data-target', '#collapseOne');
                        // li.setAttribute('aria-expanded', true);
                        // li.setAttribute('aria-controls', 'collapseOne');
                        // Create text node and append to li
                        const link = document.createElement('a');
                        link.className = 'card-link';
                        link.setAttribute('data-toggle', 'collapse');
                        link.setAttribute('href', '.row');
                        link.appendChild(document.createTextNode(row.COT_CONTS_NAME));

                        li.appendChild(link);






                        // Create ul element
                        const ul = document.createElement('ul');
                        // Add class
                        ul.className = 'list-group';
                        ul.appendChild(li);


                        //------------------------------------------

                        const rows = document.createElement('div');
                        rows.className = 'row collapse p-2';
                        rows.setAttribute('data-parent', '#profile');
                        const col_3 = document.createElement('div');
                        col_3.className = 'col-md-3';





                        const img = document.createElement('img');
                        img.className = 'img-fluid btn-block';

                        img.setAttribute('src', 'http://news.seoul.go.kr/culture/files/2016/12/585a372d0fdec7.33178437.jpg');
                        //map.setAttribute('src', img_url);
                        img.setAttribute('width', '230');
                        img.setAttribute('height', '100');



                        const view = document.createElement('a');
                        view.className = 'btn btn-primary btn-block mb-4';
                        view.appendChild(document.createTextNode('View'));

                        const col_9 = document.createElement('div');
                        col_9.className = 'col-md-9';

                        col_3.appendChild(img);
                        //col_3.appendChild(map);
                        col_3.appendChild(view);


                        // Create span element x 4
                        const primary = document.createElement('span');
                        // Add class
                        primary.className = 'badge badge-primary mr-1';
                        primary.appendChild(document.createTextNode(row.COT_ADDR_FULL_NEW));

                        // Create span element x 4
                        const secondary = document.createElement('span');
                        // Add class
                        secondary.className = 'badge badge-secondary mr-1';
                        secondary.appendChild(document.createTextNode(row.COT_ADDR_FULL_OLD));

                        // Create span element x 4
                        const success = document.createElement('span');
                        // Add class
                        success.className = 'badge badge-success mr-1';
                        success.appendChild(document.createTextNode(row.COT_VALUE_01));

                        // Create span element x 4
                        const info = document.createElement('span');
                        // Add class
                        info.className = 'badge badge-info mr-1';
                        info.appendChild(document.createTextNode(row.COT_CONTS_LAN_TYPE));

                        col_9.appendChild(primary);
                        col_9.appendChild(secondary);
                        col_9.appendChild(success);
                        col_9.appendChild(info);
                        const br = document.createElement('br');
                        col_9.appendChild(br);
                        col_9.appendChild(document.createTextNode(row.COT_VALUE_04));

                        // col_9.appendChild(map);
                        rows.appendChild(col_3);
                        rows.appendChild(col_9);

                        ul.appendChild(rows);


                        //-----------------------------
                        // const map = document.createElement('div');
                        // // map.className = 'mb-2';
                        // // // width:500px;height:400px;
                        // // //map.setAttribute('src', img_url);

                        // const options = {
                        //     center: new kakao.maps.LatLng(33.450701, 126.570667),
                        //     level: 3
                        // };
                        // const mapconfig = new kakao.maps.Map(map, options);
                        // ul.appendChild(map);



                        //<div class="jumbotron">
                        /* <h1 class="display-3">Hello, world!</h1>
                        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr class="my-4">
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <p class="lead">
                          <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                        </p>
                        </div> */


                        profile.appendChild(ul);
                        //profile.appendChild(ul);

                        // if ('.card-link')

                    } else {

                        // ui.showProfile(data)
                    }
                })
            })
    }



});








