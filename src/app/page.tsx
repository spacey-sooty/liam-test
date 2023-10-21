import styles from './page.module.css'

type Props = {
  name: string
}

export function Hello(props: Props) {
  return (
    <h1> Hello, {props.name} </h1>
  )
}

export default function Home() {
  return (
    <main>
      <Hello name="world" />
    </main>
  )
}

