import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secret0rKey: 'SECRET', // protect this, move to env var
        });
    }

    async validate(payload: any) {
         // const user = await this.usersService.getById(payload.sub)
        return {
            id: payload.sub,
            name: payload.name
        };
    }
}