import { Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <Text variant="h1">AI.27, a text model usage example inspired from Chatgbt</Text>
        <Text className="text-zinc-600">
          This is a simple chat bot is implemented using OpenAI API.
          A project  made by Mamadou K. KEITA, in collaboration with Vercel and the OpenAI Team.
        </Text>
      </section>

      <section className="flex flex-col gap-3">
        <Text variant="h2">AI Chat Bot:</Text>
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>
    </Page>
  )
}


export default Home
