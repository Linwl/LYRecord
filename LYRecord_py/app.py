from Bussiness import create_app
import argparse

app = create_app()



if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='start the web service!')
    parser.add_argument('--host', '-i',default='0.0.0.0',type=str, help='input web ip address')
    parser.add_argument('--port', '-p', required=True,type=int, help='input web port')
    args = parser.parse_args()
    app.run(host=args.host, port=args.port, debug=False,use_reloader=False)
