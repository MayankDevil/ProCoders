/*
-   website "PROCODER"
-   Designed | Developed by Mayank
-   Copyright by Mayank
-   JavaScript : ./js/footerLayout.js
*/
try
{
    document.getElementById('footer').innerHTML = (`
        <!--
            ( newsletter ) ----------
        -->
        <div id="newsletter">
            
            <div class="container text-center py-3">
                <!-- title -->
                <div class="h4 py-3"> Join Our NewsLetter </div>

                <p class=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Iusto cupiditate officia velit! </p>
                <!-- forms -->
                <form action="#" class="row justify-content-center">
                    <div class="col-sm-10 col-md-8 col-12 py-3">
                        <div class="btn-group w-100">
                            <!-- email field -->
                            <input type="email" name="email" placeholder="Your Email Address" class="form-control">
                            <!-- subscribe button -->
                            <input type="reset" value="Subscribe" class="btn btn-primary px-5">
                        </div>
                    </div>
                </form>

            </div>

        </div>
        <!--
            ( baselink ) ----------
        -->
        <div id="baselink">
            <div class="container py-5">
                <div class="row px-3">
                    <!-- 1 -->
                    <div class="col-lg-3 col-md-6 col-12 py-2">
                        
                        <div class="h5"> PROCODER </div>
                        <div class="p-2">
                            <div class="py-3">
                                #420 Vikas Nagar, Mauli Jagran in Chandigarh 160102 at India
                            </div>
                        </div>
                        <div class="py-3">
                            <b>Phone : </b> 9211420420
                        </div>
                        <div class="py-3">
                            <b>Email : </b> fake@gmail.com
                        </div>
                        
                    </div>
                    <!-- 2 -->
                    <div class="col-lg-3 col-md-6 col-12 py-2">
                        <div class="h6"> Useful links </div>
                        <div class="p-2">
                            <a href="#" class="d-block py-2 text-dark"> <span class="ent text-primary">&#10097;</span> Introduction </a>
                            <a href="#" class="d-block py-2 text-dark"> <span class="ent text-primary">&#10097;</span> About us </a>
                            <a href="#" class="d-block py-2 text-dark"> <span class="ent text-primary">&#10097;</span> Teachers </a>
                            <a href="#" class="d-block py-2 text-dark"> <span class="ent text-primary">&#10097;</span> Terams </a>
                            <a href="#" class="d-block py-2 text-dark"> <span class="ent text-primary">&#10097;</span> Policy </a>
                            <a href="#" class="d-block py-2 text-dark"> <span class="ent text-primary">&#10097;</span> Privacy </a>
                        </div>
                    </div>
                    <!-- 3 -->
                    <div class="col-lg-3 col-md-6 col-12 py-2">
                        <div class="h6"> Our Services </div>
                        <div class="p-2">
                            <a href="#" class="d-block py-2 text-dark"> <span class="ent text-primary">&#10097;</span> HTML </a>
                            <a href="#" class="d-block py-2 text-dark"> <span class="ent text-primary">&#10097;</span> CSS </a>
                            <a href="#" class="d-block py-2 text-dark"> <span class="ent text-primary">&#10097;</span> JavaScript </a>
                            <a href="#" class="d-block py-2 text-dark"> <span class="ent text-primary">&#10097;</span> PHP </a>
                            <a href="#" class="d-block py-2 text-dark"> <span class="ent text-primary">&#10097;</span> NodeJS </a>
                            <a href="#" class="d-block py-2 text-dark"> <span class="ent text-primary">&#10097;</span> ReactJS </a>
                            <a href="#" class="d-block py-2 text-dark"> <span class="ent text-primary">&#10097;</span> Bootstrap </a>
                        </div>
                    </div>
                    <!-- 4 -->
                    <div class="col-lg-3 col-md-6 col-12 py-2">
                        <div class="h6"> Our Social Networks </div>
                        <div class="p-2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dicta?</p>
                        </div>
                        <!-- social media -->
                        <div class="row" id="social">
                            <!-- linkedin -->
                            <a href="https://www.linkedin.com/in/MasterMayank" class="media col-2">
                                <span class="bi bi-linkedin"></span>
                            </a>
                            <!-- github -->
                            <a href="https://github.com/MayankDevil" class="media col-2">
                                <span class="bi bi-github"></span>
                            </a>
                            <!-- youtube -->
                            <a href="#" class="media col-2">
                                <span class="bi bi-youtube"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--
            ( copyright ) ----------
        -->
        <div id="copy_right">

            <div class="container">
                
                <div class="row">

                    <div class="col-md-6 col-12 text-md-left text-center p-3"> <b> PROCODER </b> &copy; Copyright . All Rights Reserved  </div>

                    <div class="col-md-6 col-12 text-md-right text-center p-3"> Designed | Developed By <strong> <a href="https://mastermayank.w3spaces.com" target="_blank"> Mayank </a> </strong> </div>

                </div>
                
            </div>

        </div>
    `)
}
catch(error)
{
    alert(console.error(error));
}
// TODO LOGIC CODE APPLICATION HERE
