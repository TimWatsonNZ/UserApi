FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["UserApi/UserApi.csproj", "UserApi/"]
RUN dotnet restore "UserApi/UserApi.csproj"
COPY . .
WORKDIR "/src/UserApi"
RUN dotnet build "UserApi.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "UserApi.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "UserApi.dll"]