import {fastify} from 'fastify'
import {sql} from './db/conenection.ts'
import {
    serializerCompiler,
    validatorCompiler, 
    type ZodTypeProvider} from 'fastify-type-provider-zod'
import {fastifyCors} from '@fastify/cors'
import { env } from './env.ts'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors,{
    origin:'http://localhost:5173',
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)



app.listen({port:env.PORT})