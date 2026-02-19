import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import * as Joi from 'joi'

@Module({
    imports: [NestConfigModule.forRoot({
        isGlobal: true,
        validationSchema: Joi.object({
            MONGODB_URI: Joi.string().required(),
            PORT: Joi.number().default(3005)
        })
    })]
})
export class ConfigModule {}
