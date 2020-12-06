import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Fade from 'react-reveal/Fade';
import CountUp from 'react-countup';

const ChiffresIntro = ({ chiffres }) => {
  return (
    <Container className="container-home">
      <div className="chiffres-container">
        {chiffres.map((chiffre) => {
          return (
            <div>
              <Fade bottom>
                <CountUp
                  start={0}
                  end={chiffre.chiffre}
                  delay={0.5}
                  separator=" "
                  duration={2}>
                  {({ countUpRef, start }) => (
                    <div>
                      <Fade bottom onReveal={() => start()}>
                        <div>
                          <h2 ref={countUpRef}></h2>
                        </div>
                      </Fade>
                    </div>
                  )}
                </CountUp>
              </Fade>

              <h2 className="chiffre-description">
                <Fade bottom>{chiffre.chiffre_description}</Fade>
              </h2>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default ChiffresIntro;
