async function mockFunction()
{
    const data = await fetch(/*api url*/);
    const location = await data.json();

    return location;
}