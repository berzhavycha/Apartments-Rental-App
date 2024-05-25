import { ApartmentForm, Container, AvailableApartments } from './components'

function App() {
  return (
    <div className="bg-neutral-100 w-full min-h-screen pb-10">
      <Container>
        <h1 className="text-gray-700 text-3xl font-bold pt-14 mb-14">Apartments Marketplace</h1>
        <div className="flex flex-col gap-14">
          <ApartmentForm />
          <AvailableApartments />
        </div>
      </Container>
    </div>
  )
}

export default App
