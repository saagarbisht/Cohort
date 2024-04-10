import {countAtom, evenSelector} from "./store/atoms/count"
import {useRecoilValue, RecoilRoot, useSetRecoilState}  from "recoil"

export default function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

  function Count(){
    return (
      <>
        <RenderCounter />
        <RenderButton />
        <RenderEven/>
      </>
    )
  }

function RenderCounter(){
  const count = useRecoilValue(countAtom)
  return (
      <div>{count}</div>
  )
}

function RenderButton(){
  const setCount = useSetRecoilState(countAtom)
  return (
    <div>
      <button onClick={() => {
        setCount(count => count + 1)
      }}>Increase</button>
      <button onClick={() => {
        setCount(count => count - 1)
      }}>Decrease</button>
    </div>
  )
}

function RenderEven(){
  const isEven = useRecoilValue(evenSelector);
  return(
  <div>
    {!isEven ? "number is even" : null}
  </div>
  )
}