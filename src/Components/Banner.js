import React from 'react'
import '../Components/Banner.css'

function Banner() {

      function truncate(string, n) {
        return string?.lenght > n ? string.substr(0, n - 1) + '...' : string;
      }

    return (
        <header className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://wallpapercave.com/wp/wp2831956.png")`,
            backgroundPosition: "center center"
    
          }}
        
        >
            <div className="banner_contents">
                 <h1 className="banner_title">Movie Name</h1>
                <div className="banner_buttons">
                  <button className="banner_button">Play</button>
                  <button className="banner_button">My list</button>

                </div>
                <h1 className="banner_description">
                  {truncate(
                    `This is a test description K-12 education is of great 
                    importance due to its effect on the development of future 
                    citizens.  With the advance of technology, scientific literacy 
                    is becoming essential for adequate participation in our 
                    society.  There is concern that the U.S. is falling behind 
                    other countries in science education, especially at the K-8
                    grade levels.  There is also a common attitude among 
                    students that science is too hard, too boring, and not worth
                     the effort.  Teachers have a great deal of difficulty 
                     preventing the onset of this attitude, and little hope of
                      reversing it once it takes hold. This is partly due to a 
                      socialization which places little regard for, or importance,
                       on scholarship in science and math.  If significant progress 
                       in scholarship is to be made in these areas, it must be at the
                        expense of preconceived notions of unimportance and difficulty.
                          However, limitations in the training pre-service teachers are 
                          given to teach science is also to blame.`, 
                  150
                  )}
                  </h1>

            </div>
            <div className="banner--fadeBottom" />

                </header>
            
    )
}

export default Banner
