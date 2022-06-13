import { 
  Flex, 
  PopoverTrigger, 
  Icon, PopoverContent, 
  PopoverArrow, 
  PopoverCloseButton, 
  PopoverBody, 
  Popover
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";
import { ContinentProps } from "../../pages/continent/[slug]";
import { ContinentData } from "./ContinentData";
import { ContinentText } from "./ContinentText";



export function ContinentInfo ({continents}:ContinentProps){
  
  return (
          
    <Flex
    px='150px'
    py='16'
    mx='auto'
    w='100%'
    alignItems='center'
    justifyContent='space-between'
  >
    <ContinentText
      text={`${continents.description}`}
    />

    <Flex
      justify="center"
      align={["flex-start","flex-start","center"]}
    >

      <ContinentData number={continents.numbersOfCountries} textData='Países'/>
      <ContinentData number={continents.numbersOfLanguage} textData='Línguas'/>
      <ContinentData number={continents.numberOfCities} textData='cidades +100'>
        <Popover>
            <PopoverTrigger>
              <span>
                <Icon cursor="pointer" as={RiInformationLine} ml="1" color="gray.400" w={["10px","16px"]} h={["10px","16px"]}/>
              </span>
            </PopoverTrigger>
            
          </Popover>
      </ContinentData>
        
    </Flex >
  </Flex>
  )
}