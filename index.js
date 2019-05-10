var express = require ('express');
var app = express();
var models = require('./models');

// Set View Engine
let expressHbs = require('express-handlebars');

app.engine('html', expressHbs({
    extname: 'html',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
   
}));
app.set('views', './views')
app.set('view engine', 'html');

app.engine('hbs', expressHbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
   
}));
app.set('view engine', 'hbs');


app.use(express.static(__dirname + '/public user'));
app.use(express.static(__dirname + '/public admin'));
var bodyParser = require ('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var cookieParser = require("cookie-parser");
app.use(cookieParser());

var session = require("express-session");
app.use(session(
  {
    cookie: {httpOnly: true, maxAge: 30*24*60*60*60*1000},
    secret: "S3cret",
    resave: false,
    saveUninitialized: false
  }
));

app.get('/sync', (req, res) => {    
   models.sequelize
   .sync()
   .then(() => {
       res.send('tables created!');
   });
 });

////user

///muave
app.get('/',function(req,res){
   models.movie
    .findAll({
      limit: 6,
      where: {
        filmdachieu: true
      }
    })
    .then(function(movie){
      res.locals.movies = movie;
      models.movie
      .findAll({
        limit: 6,
        where: {
          filmdachieu:null
        }
      })
      .then(function(movie){
        
        res.locals.moviess = movie;
        res.render('index.html');
      })
    })
    
});
app.get('/muave.html',function(req,res){
  models.movie
    .findAll({
      limit: 6,
      where: {
        filmdachieu: true
      }
    })
    .then(function(movie){
      res.locals.movies = movie;
      models.movie
      .findAll({
        limit: 6,
        where: {
          filmdachieu:null
        }
      })
      .then(function(movie){
        
        res.locals.moviess = movie;
        res.render('muave.html');
      })
    })
    
 });


 app.get('/sukien.html',function(req,res){
  models.movie
  .findAll({
    limit: 6,
    where: {
      filmdachieu: true
    }
  })
  .then(function(movie){
    res.locals.movies = movie;
    models.movie
    .findAll({
      limit: 6,
      where: {
        filmdachieu:null
      }
    })
    .then(function(movie){
      
      res.locals.moviess = movie;
      res.render('sukien.html');
    })
  })
 });
 app.get('/giave.html',function(req,res){
  models.movie
  .findAll({
    limit: 6,
    where: {
      filmdachieu: true
    }
  })
  .then(function(movie){
    res.locals.movies = movie;
    models.movie
    .findAll({
      limit: 6,
      where: {
        filmdachieu:null
      }
    })
    .then(function(movie){
      
      res.locals.moviess = movie;
      res.render('giave.html');
    })
  })
 });
 app.get('/seatbooking.html',function(req,res){
  models.movie
  .findAll({
    limit: 6,
    where: {
      filmdachieu: true
    }
  })
  .then(function(movie){
    res.locals.movies = movie;
    models.movie
    .findAll({
      limit: 6,
      where: {
        filmdachieu:null
      }
    })
    .then(function(movie){
      
      res.locals.moviess = movie;
      res.render('seatbooking.html');
    })
  })
 });
 app.get('/about.html',function(req,res){
  models.movie
  .findAll({
    limit: 6,
    where: {
      filmdachieu: true
    }
  })
  .then(function(movie){
    res.locals.movies = movie;
    models.movie
    .findAll({
      limit: 6,
      where: {
        filmdachieu:null
      }
    })
    .then(function(movie){
      
      res.locals.moviess = movie;
      res.render('about.html');
    })
  })
 });
 app.get('/changepass.html',function(req,res){
  models.movie
  .findAll({
    limit: 6,
    where: {
      filmdachieu: true
    }
  })
  .then(function(movie){
    res.locals.movies = movie;
    models.movie
    .findAll({
      limit: 6,
      where: {
        filmdachieu:null
      }
    })
    .then(function(movie){
      
      res.locals.moviess = movie;
      res.render('changepass.html');
    })
  })
 });
 app.get('/Dangky.html',function(req,res){
  models.movie
  .findAll({
    limit: 6,
    where: {
      filmdachieu: true
    }
  })
  .then(function(movie){
    res.locals.movies = movie;
    models.movie
    .findAll({
      limit: 6,
      where: {
        filmdachieu:null
      }
    })
    .then(function(movie){
      
      res.locals.moviess = movie;
      res.render('Dangky.html');
    })
  })
 });

 

 app.get('/introPhim.html',function(req,res){
 models.movie
 .findAll({
   limit: 6,
   where: {
     filmdachieu: true
   }
 })
 .then(function(movie){
   res.locals.movies = movie;
   models.movie
   .findAll({
     limit: 6,
     where: {
       filmdachieu:null
     }
   })
   .then(function(movie){
     
     res.locals.moviess = movie;
     res.render('introPhim.html');
   })
 })
});

app.get('/product:id',function(req,res){
  var a = req.params.id;
  models.movie
  .findAll({
    limit: 6,
    where: {
      filmdachieu: true
    }
  })
  .then(function(movie){
    res.locals.movies = movie;
    models.movie
    .findAll({
      limit: 6,
      where: {
        filmdachieu:null
      }
    })
    .then(function(movie){
      
      res.locals.moviess = movie;
      models.movie.findOne({
        where:{
          id:a
        }
      })
      .then(function(movie){
        res.locals.moviesss = movie;
        res.render('reviewPhim.html')
      })
    })
  })

  
})


 app.get('/profile.html',function(req,res){
  models.movie
  .findAll({
    limit: 6,
    where: {
      filmdachieu: true
    }
  })
  .then(function(movie){
    res.locals.movies = movie;
    models.movie
    .findAll({
      limit: 6,
      where: {
        filmdachieu:null
      }
    })
    .then(function(movie){
      
      res.locals.moviess = movie;
      res.render('profile.html');
    })
  })
 });
 app.get('/reviewPhim.html',function(req,res){
    res.render('reviewPhim.html');
 });
 app.get('/index.html',function(req,res){
  models.movie
  .findAll({
    limit: 6,
    where: {
      filmdachieu: true
    }
  })
  .then(function(movie){
    res.locals.movies = movie;
    models.movie
    .findAll({
      limit: 6,
      where: {
        filmdachieu:null
      }
    })
    .then(function(movie){
      
      res.locals.moviess = movie;
      res.render('index.html');
    })
  })
 });
 
 

 /////admin
 app.get('/admin',function(req,res){
    res.render('login.hbs',{layout: false});
 });
app.post('/admin',function(req,res){
  var username = req.body.username;
  var password = req.body.password;

  models.staff
        .findOne({ where: {username:username} })
        .then(function(user) {
            if(!user)
            {
              res.type('json');
                res.status(200);
                res.send(JSON.stringify({
                  G8:false
                }))
            }
            else{
              console.log("password:" + password);
              if(password==user.password)
              {
                req.session.user = user;
                res.type('json');
                res.status(200);
                res.send(JSON.stringify({
                  G8:true
                }))

              }
              else{
                res.type('json');
                res.status(200);
                res.send(JSON.stringify({
                  G8:false
                }))
              }
            }
        })
        .catch(function(err) {
            if (err) throw err;
            callback(null);
        });
})


 app.get('/admin/dashboard',function(req,res){
  models.proceedweek
  .findOne({
    order: [['id', 'DESC']]
  })
  .then(function(proceedweeks){
    res.locals.proceedweeks = proceedweeks;
    models.proceedmonth
    .findOne({
      order: [['id', 'DESC']]
    })
    .then(function(proceedmonths){
      res.locals.proceedmonths = proceedmonths;
      res.render('dashboard.hbs');
  })
  })
    
 });


 app.get('/admin/order',function(req,res){
  models.recipt
  .findAll()
  .then(function(recipt){
    res.locals.recipts = recipt;
      res.render('order.hbs');
    })
    
 });
 


 app.get('/admin/product',function(req,res){
  models.movie
  .findAll()
  .then(function(movie){
    res.locals.movies = movie;
    res.render('product.hbs');
    })
 });
 app.post('/admin/product',function(req,res){
   var time = {
     duration: req.body.time,
     title: req.body.title,
     director: req.body.direc,
     actor: req.body.actor,
     theloai: req.body.tl,
     desc: req.body.Description,
     price: req.body.price,
     img_path1: req.body.path1,
     img_path2: req.body.path2,
     filmdachieu: req.body.dangchieu,
     quocgia: req.body.quocgia,
     nsx: req.body.nsx

   }
   console.log(time);
   models.movie
   .create(time)
   .then(function(){
     res.sendStatus(200);
   })
 })
 app.get('/admin/profile',function(req,res){
  models.staff
  .findAll()
  .then(function(staff){
    res.locals.staffs = staff;
    res.render('profile.hbs');
  })
 });
 app.get('/admin/user',function(req,res){
  models.user
  .findAll()
  .then(function(user){
    res.locals.users = user;
    res.render('user.hbs');
  })
 });


 app.get('/createfilm',function(req,res) {
   models.movie
   .bulkCreate(
     [
       {
           title:'ALITA: THIÊN THẦN CHIẾN BINH',
           director:'Robert Rodriguez',
           actor:'Rosa Salazar, Keean Johnson, Jennifer Connelly,...',
           desc:'Alita: Thien Thần Chiến Binh là một bộ phim điện ảnh thể loại cyperpunk hành động viễn tưởng Mĩ năm 2019, dựa trên bộ mâng Gunnm của tác Giả Yukito Kishiro. Rosa Salazar đóng vai chính là Alita, một người máy không hề nhớ mình là ai và đến từ đâu, cô bắt đầu tìm lại kí ức của mình',
           duration:'122 phút',
           img_path1:'images/1.jpg',
           img_path2:'images/1 - Copy.jpg',
           filmdachieu: true,
           price:70000,
           showtime:'8:30:00', 
           showtime1:'15:30:00',
           quocgia:'Mĩ',
           nsx:'20th Century Fox',
           theloai:'Hành động, Khoa học viễn tưởng'
       },
       {
        title:'BÍ KÍP LUYỆN RỒNG 3: VÙNG ĐẤT BÍ ẨN',
        director:'Dean DeBlois',
        actor:' T.J. Miller, Gerard Butler, Cate Blanchett',
        desc:'Bí Kíp Luyện Rồng 3 Vùng Đất Bí Ẩn là một bộ phim hành động giả tưởng hoạt hình máy tính 3D Mỹ năm 2019 được sản xuất bởi DreamWorks Animation và được phân phối bởi Universal Pictures, dựa trên bộ sách cùng tên của Cressida Cowell. Nó là một phần tiếp theo của năm 2010 Làm thế nào để Train Your Dragon và 2014 Làm thế nào để Train Your Dragon 2.',
        duration:'104 phút',
        img_path1:'images/3.jpg',
        img_path2:'images/3 - Copy.jpg',
        filmdachieu: true,
        price:70000,
        showtime:'19:00:00', 
        showtime1:'21:00:00',
        showtime2:'23:00:00',
        quocgia:'Mĩ',
        nsx:'Cressida Cowell',
        theloai:'Phiêu lưu, Hoạt hình, Hành động, Hài, Gia đình, Giả tưởng'


      },
      {
        title:'HAPPY DEATH DAY 2: SINH NHẬT CHẾT CHÓC 2',
        director:'Christopher Landon',
        actor:'Jessica Rothe, Israel Broussard, Ruby Modine, Suraj Sharma',
        desc:'Cô nàng “Queen Bee” Tree Gelbman sẽ tái nhập vào vòng lặp thời gian để tìm hiểu lý do vì sao cô đã phải đối mặt với nó ở phần phim đầu tiên. Hơn nữa, Tree sẽ một lần nữa đối mặt với người bạn cùng phòng “tốt bụng” Lori – người đã được hồi sinh nhờ vòng lặp thời gian khi cô ta đang nung nấu ý định trả thù.',
        duration:'100 phút',
        img_path1:'images/2.jpg',
        img_path2:'images/2 - Copy.jpg',
        price:70000,
        showtime:'19:00:00', 
        showtime1:'21:00:00',
        showtime2:'23:00:00',
        quocgia:'Mĩ',
        nsx:'Blumhouse Productions',
        theloai:'Kinh dị, ly kỳ'


      },
      {
        title:'CUA LẠI VỢ BẦU',
        director:'Nhất Trung',
        actor:'Trấn Thành, Ninh Dương Lan Ngọc, Khả Như, Hữu Châu',
        desc:'Trọng Thoại và Nhã Linh yêu nhau đã được bảy năm. Những lỗi lầm nho nhỏ bắt đầu tích tụ thành mâu thuẫn cực lớn đẩy cả hai xa nhau. Lại thêm sự xuất hiện của người cũ Quý Khánh càng khiến Nhã Linh xao lòng. Và rồi, cô có thai. Rốt cuộc đứa bé là của ai và Nhã Linh sẽ chọn người đàn ông nào đi tiếp cùng mình? Sở hữu dàn diễn viên được đông đảo công chúng biết đến- kết hợp thế hệ diễn viên trẻ và các bậc lão làng kỳ cựu, cộng thêm kịch bản vui tươi nhưng chẳng kém phần cảm động, Cua Lại Vợ Bầu là điển hình cho công thức thành công gần như 100% của phim Việt mùa Tết.',
        duration:'102 phút',
        img_path1:'images/4.jpg',
        img_path2:'images/4 - Copy.jpg',
        filmdachieu: true,
        price:70000,
        showtime:'19:00:00', 
        showtime1:'21:00:00',
        showtime2:'23:00:00',
        quocgia:'Việt Nam',
        nsx:'NT Studio',
        theloai:'Hài, Gia Đình, Tình Cảm'


      },
      {
        title:'ANT MAN: NGƯỜI KIẾN',
        director:'Peyton Reed',
        actor:'Paul Rudd, Michael Douglas, Corey Stoll',
        desc:'Ant-Man kể về câu chuyện của một người đàn ông tên là Scott Lang, có khả năng thu nhỏ về kích thước nhưng lại tăng sức mạnh. Điều này buộc Scott Lang phải đón nhận yếu tố "anh hùng" trong mình và giúp cố vấn là Tiến sĩ Hank Pym bảo vệ bí mật đằng sau bộ trang phục Ant-Man, thoát khỏi một mối đe dọa khủng khiếp. Đối mặt với những rào cản khổng lồ, Scott Lang và Hank Pym phải lên kế hoạch hoàn thành một vụ cướp để có thể cứu thế giới.',
        duration:'117 phút',
        img_path1:'images/5.jpg',
        img_path2:'images/5 - Copy.jpg',
        price:70000,
        showtime:'19:00:00', 
        showtime1:'21:00:00',
        showtime2:'23:00:00',
        quocgia:'Mỹ, Anh',
        nsx:'Big Talk Productions, Marvel Enterprises, Marvel Studios',
        theloai:'Phim hành động, Phim viễn tưởng, Phim chiếu rạp, Phim lẻ'


      },
      {
        title:'ESCAPE ROOM: CĂN PHÒNG TỬ THẦN',
        director:'Adam Robitel',
        actor:' Taylor Russell, Logan Miller, Jay Ellis',
        desc:'Căn Phòng Tử Thần đưa 6 người chơi đến những căn phòng với những câu đó hóc búa nhất mà sự thất bại của người chơi sẽ được đánh đổi bằng mạng sống, làm con chuột bạch trong lồng mua vui cho những kẻ bệnh hoạn.',
        duration:'99 phút',
        img_path1:'images/6.jpg',
        img_path2:'images/6 - Copy.jpg',
        price:70000,
        showtime:'19:00:00', 
        showtime1:'21:00:00',
        showtime2:'23:00:00',
        quocgia:'Mĩ, Canada',
        nsx:'Original Film',
        theloai:'Phim hành động, Phim viễn tưởng, Phim phiêu lưu, Phim kinh dị, Phim hồi hộp-Gây cấn, Phim Bí ẩn-Siêu nhiên, Phim chính kịch - Drama, Phim chiếu rạp, Phim lẻ'
      }


      ]
      )
      .then(function(movie){
        res.json(movie);
      })
      .catch(function(erorr){
        res.json(erorr);
      })
    
    });
 
    app.get('/admin/dashboard/createticketsold',function(req,res) {
      models.ticketsold
      .bulkCreate(
        [
          {
             movieid: 1,
             moviename:'abc',
             ticket:10
          }
   
         ]
         )
         .then(function(ticketsold){
           res.json(ticketsold);
         })
         .catch(function(erorr){
           res.json(erorr);
         })
       
       });
  
       app.get('/admin/dashboard/createview',function(req,res) {
         models.view
         .bulkCreate(
           [
             {
               sumviewMon: 1,
               sumviewTues:100,
               sumviewWed: 1,
               sumviewThurs:20,
               sumviewFri: 1,
               sumviewSat:10,
               sumviewSun: 1
            }
      
            ]
            )
            .then(function(view){
              res.json(view);
            })
            .catch(function(erorr){
              res.json(erorr);
            })
          
          });
   
          app.get('/admin/dashboard/createproceedweek',function(req,res) {
            models.proceedweek
            .bulkCreate(
              [
                {
                  sumMon: 50000,
                  sumTues:60000,
                  sumWed: 85000,
                  sumThurs:100000,
                  sumFri: 20000,
                  sumSat:15000,
                  sumSun: 69000
               }
         
               ]
               )
               .then(function(proceedweek){
                 res.json(proceedweek);
               })
               .catch(function(erorr){
                 res.json(erorr);
               })
             
             });
   
             app.get('/admin/dashboard/createproceedmonth',function(req,res) {
               models.proceedmonth
               .bulkCreate(
                 [
                   {
                     sumJan: 30000,
                     sumFeb:60000,
                     sumMar: 90000,
                     sumApr:45000,
                     sumMay: 20000,
                     sumJun:100000,
                     sumJul: 70000,
                     sumAug:10000,
                     sumSem: 140000,
                     sumOct:80000,
                     sumNov: 60000,
                     sumDec:50000

                  }
            
                  ]
                  )
                  .then(function(proceedmonth){
                    res.json(proceedmonth);
                  })
                  .catch(function(erorr){
                    res.json(erorr);
                  })
                
                });
   
                app.get('/admin/profile/createstaff',function(req,res) {
                  models.staff
                  .bulkCreate(
                    [
                      {
                        id:1653074,
                        staffname:'Nguyễn Xuân Sang',
                        username: 'abmin74',
                        password:'1653074',
                        email:'1653074@student.hcmus.edu.vn',
                        img_path:'../images/staff/1653074.jpg',
                        role:'WEB DEVELOPER',
                        phone:'093 4434 52'
                     },
                     {
                      id:1653020,
                      staffname:'Vũ Hải',
                      username: 'abmin20',
                      password:'1653020',
                      email:'1653020@student.hcmus.edu.vn',
                      img_path:'../images/staff/1653020.jpg',
                      role:'WEB DEVELOPER',                        
                      phone:'096 2261 525'

                   },
                   {
                    id:1653018,
                    staffname:'Phan Trần Thế Duy',
                    username: 'abmin18',
                    password:'1653018',
                    email:'1653018@student.hcmus.edu.vn',
                    img_path:'../images/staff/1653018.jpg',
                    role:'WEB DEVELOPER',
                    phone:'090 0099 000'
                 },
                 {
                  id:1653012,
                  staffname:'Phạm Viết Minh Đạo',
                  username: 'abmin12',
                  password:'1653012',
                  email:'1653012@student.hcmus.edu.vn',
                  img_path:'../images/staff/1653012.jpg',
                  role:'WEB DEVELOPER',
                  phone:'033 5947 766'
               }

               
                     ]
                     )
                     .then(function(staff){
                       res.json(staff);
                     })
                     .catch(function(erorr){
                       res.json(erorr);
                     })
                   
                   }); 
                      app.get('/admin/order/createrecipt',function(req,res) {
                        models.recipt
                        .bulkCreate(
                          [
                            {
                              customer:'Alec Benjamin',
                              movieid:1,
                              ticket:5,
                              seat:'A1 A2 A3 A4 A5)',
                              phone:'0909999988',
                              payment:true,
                              price:100000,
                              sum:500000
                           }
                     
                           ]
                           )
                           .then(function(recipt){
                             res.json(recipt);
                           })
                           .catch(function(erorr){
                             res.json(erorr);
                           })
                         
                         });
                         app.get('/admin/user/createuser',function(req,res) {
                          models.user
                          .bulkCreate(
                            [
                              {
                                name:'Nguyễn Xuân Sang',
                                username: 'abmin74',
                                password:'1653074',
                                email:'1653074@student.hcmus.edu.vn',
                                phone:'093 4434 52',
                                address:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                              },
                              {
                                name:'Nguyễn Xuân Sang',
                                username: 'abmin74',
                                password:'1653074',
                                email:'1653074@student.hcmus.edu.vn',
                                phone:'093 4434 52',
                                address:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                              },
                              {
                                name:'Nguyễn Xuân Sang',
                                username: 'abmin74',
                                password:'1653074',
                                email:'1653074@student.hcmus.edu.vn',
                                phone:'093 4434 52',
                                address:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                              }        
                       
                             ]
                             )
                             .then(function(staff){
                               res.json(staff);
                             })
                             .catch(function(erorr){
                               res.json(erorr);
                             })
                           
                           });
        
  

app.set('port',process.env.PORT | 2000);
app.listen(app.get('port'),function(){
    console.log('Server is listening on port'+ app.get('port'));
});
