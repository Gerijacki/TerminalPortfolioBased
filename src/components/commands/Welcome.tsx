import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
                ____           _  _            _    _ 
              / ___| ___ _ __(_)(_) __ _  ___| | _(_)
              | |  _ / _ \\ '__| || |/ _ |/ __| |/ / |
              | |_| |  __/ |  | || | (_| | (__|   <| |
              \\____|\\___|_|  |_|/ |\\__,_|\\___|_|\\_\\_|
                               |__/                 ^                  
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
            ____           _           
          / ___| ___ _ __(_)          
          | |  _ / _ \\ '__| |          
          | |_| |  __/ |  | |          
          \\____|\\___|_|  |_|   _    _ 
                  (_) __ _  ___| | _(_)
                  | |/ _^ |/ __| |/ / |
                  | | (_| | (__|   <| |
                _/ |\\__,_|\\___|_|\\_\\_|
                |__/                   
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>
          Ideas have to take shape. They become reality as you work on them.
          <Cmd> Just get going.</Cmd>
        </div>
        <Seperator>----</Seperator>
        <div>Welcome to my personal portfolio based on a linux terminal.</div>
        <Seperator>----</Seperator>
        <div>
          All the code source code can be found on:{" "}
          <Link href="https://github.com/Gerijacki/TerminalPortfolioBased">
            GitHub
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For my <Cmd> gui version of portfolio </Cmd> enter here:{" "}
          <Link href="https://gerijacki.vercel.app/en">Web</Link>
        </div>
        <Seperator>----</Seperator>
        <div>
          For list all the available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
            -*###**+-:...:=++=-..:=*%@@@@@%=             
          -+#@@@@@@@@##@@@@@@@@@@%*%@@@@@@*-             
           +#@@@@@@@%#*#@@@@@@@@@%%%@@@@@%=:             
           +*@@@@@%---#*+@@@@@@%#@#**%@*#+:              
            +#@%%#-:::--#@@@@@@@******#%+:               
             **#@*::.-*@@@@@@@@@@%*+++*@%=.              
             -+%@@@@@@@@@@@@%@@@@%%@@@@@@#-.             
             -*@@@@@@@@@@@@@@@@@@@@@@@@@@%+:             
             =%@@@@%@@%#%%@%%@@@@@@@@@@@@@#-             
            :+%@@%%@@@%%@@@@@%@@@%#*#@@%@@%=.            
            :*@@%%@%##@%%##%%%%#%@@%*#%%@@@*.            
            .#@@@@@#+++=*#**+==+===++#@@@@@#.            
             #@@@%@#+::++=-----==+::+#@%@@@#.            
             *@@@*#*=:%@@=:::::+@@#:=##*@@@#             
             =#@@@*+==-+=::--:::++-==+*@@@%+             
              -*@@@@#-:::::::::::::-#@@@@%-              
                =#@@@%+:::::::::::+@@@@%+:               
            ..:=*##%@@@@%*=::-=#@@@@@%+-                 
         :-+#@@@@@@@@@@@@#=====#@@@@%#=:                 
       :-#@@@@@@@@@@@@@@%@#+=+#@%%@@@@@#-.               
       -*@@@@@@@@@@@@@@%*@%**#%@*%%%@@#==-:::----=       
       +#@@@@@@@@@@@@@@%+@%#*#%@*%@##*+#%%%%%%%%%%       
       *#@@@@%+++++++==++%%%*%%%*#=+#**%@@@@@@@@%@       
        *#@@@+=-=---:=::+-+%*%%%@@@#**#@@@@@@@@%%@       
     #**++*%%#%%*-:=-*+-=@%%%%%%@@*:=#%@@@@@@@@%@@       
     ####*%###==+*#==++++==========+*#@@@@@@@@@%@        
        @@@@@#=+**+++++++=++++====++#%@@@@@@@%*          
        +%@%@***********************#@@@@%%@@%#+         
       @@@@@%%*+*%@@@@@@@@@@@@@@%%%%%@@%%@@@@@@@@@       
       @@@@@@@@@@%%%%%%@%%%@@@@@@@@@@@%@@@@@@@@@@@       
       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@             
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
